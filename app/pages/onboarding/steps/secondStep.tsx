import React from "react";
import { useLoaderData } from "@remix-run/react";

import { Input } from "~/shared/components";

type FoundingSource = {
  fundingSources: string;
  successRate: number;
};

const SecondStep: React.FC = () => {
  const { fundingSourcesData } = useLoaderData<{
    fundingSourcesData: FoundingSource[];
  }>();

  return (
    <div className="pb-12">
      <p>
        This is a screen with some more content that you may want to look into.
        It also has a table and a question.
      </p>

      <table className="shadow-lg bg-white my-4  md:mx-auto">
        <thead>
          <tr>
            <th className="border text-left text-center">Funding Sources</th>
            <th className="border text-left px-8 py-4">Success Rate</th>
          </tr>
        </thead>
        <tbody>
          {fundingSourcesData?.map((data) => (
            <tr key={data.successRate}>
              <td className="border px-8 py-4">{data.fundingSources}</td>
              <td className="border px-8 py-4">{data.successRate}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Input label="What(if any) of the above funding options have you tried before?" />
    </div>
  );
};

export default SecondStep;
