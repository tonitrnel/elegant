import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import { navigate } from 'gatsby';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { createProduceWrapper } from 'utils/createProduceWrapper';
import './styles/Search.less';
import clsx from 'utils/clsx';

export const Search: FC<{}> = () => {
  const [state, setState] = createProduceWrapper(
    useState({
      visible: false,
      keywords: '',
    })
  );
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClickSearch = useCallback(() => {
    setState((draft) => {
      draft.visible = true;
      Promise.resolve().then(() => inputRef.current?.focus());
    });
  }, []);
  const onChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setState((draft) => void (draft.keywords = ev.target.value));
  }, []);
  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (ev.key !== 'Enter') return void 0;
      ev.preventDefault();
      navigate(`/s?q=${state.keywords}`);
    },
    [state.keywords]
  );
  const onInputBlur = useCallback(() => {
    setState((draft) => void (draft.visible = false));
  }, []);
  return (
    <div className="search-box">
      <button className="search-btn" onClick={onClickSearch}>
        <SearchIcon className="search-btn__icon" />
      </button>
      <input
        className={clsx('search-input', state.visible && 'search-input--open')}
        value={state.keywords}
        onChange={onChange}
        ref={inputRef}
        onBlur={onInputBlur}
        onKeyDown={onKeyDown}
        placeholder="请输入搜索关键字"
        type="search"
      />
    </div>
  );
};
