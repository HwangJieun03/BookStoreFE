// src/style/styled.d.ts
import 'styled-components';
import { Theme } from './theme'; 

// DefaultTheme을 Theme 타입으로 확장
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // 여기서 확장
}
