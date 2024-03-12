export enum Color {
  blue = "blue",
  green = "green",
  yellow = "yellow",
  purple = "purple",
  orange = "orange",
}

export type ProgressIndicatorProps = {
  progress: number;
  color: keyof typeof Color;
};
