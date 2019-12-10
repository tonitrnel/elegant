import React, { PureComponent, Fragment } from 'react'
import { render } from 'react-dom'
import { ReactComponent as IconPause } from '@/assets/images/pause.svg'
import { ReactComponent as IconPlay } from '@/assets/images/play.svg'
import { ReactComponent as IconLoopOn } from '@/assets/images/loop.svg'
import { ReactComponent as IconLoopOff } from '@/assets/images/loop-off.svg'
import audio_background from '@/assets/images/audio-background.png'
import classes from './index.styl'

interface Props {
  data: {
    title: string
    cover: string
    artist: string
  }
  target: HTMLAudioElement
}

interface State {
  played: number
  loaded: number
  paused: boolean
  loop: boolean
  loading: boolean
  error: boolean
  duration: number
  pointer: {
    pos: number
    show: boolean
  }
}

function pad(str: number) {
  return str.toString().padStart(2, '0')
}

export function mmss(duration: number) {
  return `${pad(Math.floor(duration / 60) | 0)}:${pad(
    Math.floor(duration % 60) | 0
  )}`
}

class AudioPlayerComponent extends PureComponent<Props, State> {
  state: State = {
    played: 0,
    loaded: 0,
    duration: 0,
    paused: true,
    loop: false,
    loading: false,
    error: false,
    pointer: {
      pos: 0,
      show: false
    }
  }
  listen_stack: { name: string; handle: (event: any) => void }[] = []
  readonly title = document.title
  componentDidMount(): void {
    const { target } = this.props
    this.setState({ loaded: this.getBuffered(), duration: this.getDuration() })
    this.listen_stack = [
      {
        name: 'timeupdate',
        handle: this.onTimeUpdate
      },
      {
        name: 'durationchange',
        handle: this.onDurationChange
      },
      {
        name: 'playing',
        handle: this.onPlaying
      },
      {
        name: 'waiting',
        handle: this.onWaiting
      },
      {
        name: 'error',
        handle: this.onError
      },
      {
        name: 'suspend',
        handle: this.onBufferUpdate
      },
      {
        name: 'ended',
        handle: this.onEnded
      },
      {
        name: 'play',
        handle: this.onChange
      },
      {
        name: 'pause',
        handle: this.onChange
      }
    ]
    this.listen_stack.forEach(listen => {
      target.addEventListener(listen.name, listen.handle)
    })
  }
  componentWillUnmount(): void {
    const { target, data } = this.props
    this.listen_stack.forEach(listen => {
      target.removeEventListener(listen.name, listen.handle)
    })
    URL.revokeObjectURL(data.cover)
  }
  onDurationChange = () => {
    this.setState({ duration: this.getDuration() })
  }
  onPlaying = () => {
    this.setState({ loading: true })
  }
  // 发生错误
  onError = () => {
    this.setState({ error: true })
  }
  // 音频加载
  onWaiting = () => {
    this.setState({ loading: true })
  }
  // 结束
  onEnded = () => {
    const { target } = this.props
    if (!target.loop) {
      this.setState({ paused: true })
    }
  }
  getDuration = () => {
    const { target } = this.props
    return target.duration
  }
  getWidth = (e: number) => {
    const { duration } = this.state
    return ((e / duration) * 100).toFixed(2) + `%`
  }
  onTimeUpdate = ({ target }) => {
    if (this.dragPointer) return void 0
    this.setState({ played: target.currentTime, loading: false })
  }
  getBuffered = () => {
    const { target } = this.props
    if (target.buffered.length > 0) {
      return target.buffered.end(0)
    }
    return 0
  }
  onBufferUpdate = () => {
    this.setState({ loaded: this.getBuffered() })
  }
  onChange = () => {
    const { target, data } = this.props
    document.title = target.paused
      ? this.title
      : `${data.title} - ${data.artist}`
    this.setState({ paused: target.paused })
  }
  toggleState = () => {
    const { target, data } = this.props
    if (target.paused) {
      target.play()
      document.title = data.title
    } else {
      target.pause()
      document.title = this.title
    }
  }
  toggleLoop = () => {
    const { target } = this.props
    target.loop = !target.loop
    this.setState({ loop: target.loop })
  }
  updateTime = ev => {
    const {
      left,
      width
    } = (ev.currentTarget as HTMLElement).getBoundingClientRect()
    const x = ev.clientX - left
    if (x > width) return void 0
    const { target } = this.props
    target.currentTime = (x / width) * target.duration
  }
  enablePointer = false
  dragPointer = false
  movePointer = ev => {
    const { left, width } = ev.target.getBoundingClientRect()
    const x = ev.clientX - left
    if (x > width) return void 0
    requestAnimationFrame(() => {
      if (!this.enablePointer) return void 0
      if (this.dragPointer) {
        const { target } = this.props
        this.setState({ played: (x / width) * target.duration })
      }
      this.setState({
        pointer: {
          pos: x,
          show: true
        }
      })
    })
  }
  openPointer = () => {
    this.enablePointer = true
  }
  openPointerDrag = () => {
    this.dragPointer = true
    document.addEventListener('mouseup', this.closePointerDrag)
  }
  closePointerDrag = () => {
    this.dragPointer = false
    document.removeEventListener('mouseup', this.closePointerDrag)
    const { target } = this.props
    target.play()
  }
  cleanPointer = () => {
    if (this.dragPointer) return
    this.enablePointer = false
    this.setState({
      pointer: {
        pos: 0,
        show: false
      }
    })
  }
  render() {
    const { data } = this.props
    const {
      played,
      loaded,
      paused,
      loop,
      loading,
      duration,
      pointer
    } = this.state
    return (
      <Fragment>
        <div
          className={classes.audioLeft}
          style={{
            backgroundImage: `url("${audio_background}")`,
            animationPlayState: paused ? 'paused' : 'running'
          }}
        >
          {data.cover && (
            <img
              className={classes.albumCover}
              src={data.cover}
              alt="专辑封面"
            />
          )}
        </div>
        <div className={classes.audioRight}>
          <div>
            <span className={classes.audioTitle}>{data.title}</span>
            <span className={classes.audioArtist}>{data.artist}</span>
            <span
              className={classes.loading}
              style={{ opacity: loading ? 1 : 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.audioIcon}
                viewBox="0 0 100 100"
              >
                <rect x="20" y="30" width="5" height="40">
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    values="40;20;40"
                    dur="1s"
                    begin="-0.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    values="20;60;20"
                    dur="1s"
                    begin="-0.2s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="50" y="30" width="5" height="40">
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    values="40;20;40"
                    dur="1.1s"
                    begin="-0.1s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    values="20;60;20"
                    dur="1.1s"
                    begin="-0.1s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="80" y="30" width="5" height="40">
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    values="40;20;40"
                    dur="1.2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    values="20;60;20"
                    dur="1.2s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </span>
          </div>
          <div className={classes.audioControls}>
            {paused ? (
              <button
                onClick={this.toggleState}
                className={classes.audioButton}
              >
                <IconPlay className={classes.audioIcon} />
              </button>
            ) : (
              <button
                onClick={this.toggleState}
                className={classes.audioButton}
              >
                <IconPause className={classes.audioIcon} />
              </button>
            )}
            {loop ? (
              <button onClick={this.toggleLoop} className={classes.audioButton}>
                <IconLoopOn className={classes.audioIcon} />
              </button>
            ) : (
              <button onClick={this.toggleLoop} className={classes.audioButton}>
                <IconLoopOff className={classes.audioIcon} />
              </button>
            )}
            <span>{mmss(played)}</span>
            <div
              className={classes.audioBarWrap}
              onMouseMove={this.movePointer}
              onMouseOut={this.cleanPointer}
              onMouseOver={this.openPointer}
              onMouseDown={this.openPointerDrag}
              onClick={this.updateTime}
            >
              <div
                className={classes.audioPointer}
                style={{
                  display: pointer.show ? 'block' : 'none',
                  transform: `translateX(${pointer.pos}px)`
                }}
              />
              <div className={classes.audioBarContainer}>
                <div
                  className={classes.audioLoaded}
                  style={{ width: this.getWidth(loaded) }}
                />
                <div
                  className={classes.audioPlayed}
                  style={{ width: this.getWidth(played) }}
                />
              </div>
            </div>
            <span>{mmss(duration)}</span>
          </div>
        </div>
      </Fragment>
    )
  }
}

export function install(node: HTMLAudioElement, data: Props['data']) {
  if (!node.parentNode) return void 0
  const prev = node.previousElementSibling
  if (prev && prev.className === classes.audioPlayer) {
    return void 0
  }
  const root = document.createElement('div')
  root.className = classes.audioPlayer
  render(<AudioPlayerComponent target={node} data={data} />, root)
  node.controls = false
  node.title = `${data.title} - ${data.artist}`
  node.parentNode.insertBefore(root, node)
}
