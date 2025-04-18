import "@emotion/react";
import type { AppTheme } from "~/theme/src";

declare module "@emotion/react" {
    export interface Theme extends AppTheme {}
}
