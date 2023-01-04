import { RootStackParamList } from './types/typeImport';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  };
};