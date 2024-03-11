import React from "react";
import { Input } from "~/shared/components";

const FirstStep: React.FC = () => {
  return (
    <>
      <p className="text-gray-900">
        This is some long format text about this screen&apos;s content. Oh wait
      </p>
      <ul className="px-6">
        <li>It also</li>
        <li>Has</li>
        <li>Bullets</li>
      </ul>

      <div className="grid gap-4 mt-4">
        <Input label="First name" name="fist_name" placeholder="First Name" />

        <Input label="Last name" name="last_name" placeholder="Last Name" />

        <Input label="Email" name="email" placeholder="Email" />
      </div>
    </>
  );
};

export default FirstStep;
