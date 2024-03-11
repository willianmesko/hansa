import { useLoaderData } from "@remix-run/react";
import { ProgressIndicatorProps } from "./ProgressIndicator.props";

type UseProgressIndicatorOutput = Required<ProgressIndicatorProps>;
type UseProgressIndicatorInput = ProgressIndicatorProps;

//The component can be hydrated by client or server

export default function useProgressIndicator({
  progress,
  color,
}: UseProgressIndicatorInput): UseProgressIndicatorOutput {
  const {
    progressIndicatorMetaData: { progress: _progress, color: _color },
  } = useLoaderData<{
    progressIndicatorMetaData: UseProgressIndicatorOutput;
  }>();

  return {
    progress: progress ?? _progress,
    color: color ?? _color,
  };
}
