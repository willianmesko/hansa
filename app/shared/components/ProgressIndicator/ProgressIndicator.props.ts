export enum Color {
  blue = "blue",
  green = "green",
  yellow = "yellow",
  purple = "purple",
}

export type ProgressIndicatorProps = {
  progress?: number;
  color?: keyof typeof Color;
};
