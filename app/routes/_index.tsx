import { json } from "@remix-run/node";

import { OnboardingPage } from "~/pages";
import { Color } from "~/shared/components/ProgressIndicator/ProgressIndicator.props";

const tableData = [
  {
    fundingSources: "Private foundations",
    successRate: 75,
  },
  {
    fundingSources: "Community foundations",
    successRate: 65,
  },
  {
    fundingSources: "Corporations",
    successRate: 52,
  },
  {
    fundingSources: "State government",
    successRate: 42,
  },
  {
    fundingSources: "Local government",
    successRate: 36,
  },
  {
    fundingSources: "Federal government funding",
    successRate: 33,
  },
  {
    fundingSources: "Other funding sources",
    successRate: 13,
  },
];

export default function Index() {
  return <OnboardingPage />;
}

const getFundingSources = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(tableData);
    }, 200);
  });

const getProgressIndicatorProps = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        progress: 33,
        color: Color.blue,
      });
    }, 200);
  });

export async function loader() {
  const [fundingSourcesData, progressIndicatorProps] = await Promise.all([
    getFundingSources(),
    getProgressIndicatorProps(),
  ]);

  return json({
    fundingSourcesData,
    progressIndicatorProps,
  });
}
