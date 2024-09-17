import type { TCurrency } from '../../shared/types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const exchangeState = atom<TCurrency[] | null>({
  key: 'exchangeState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
