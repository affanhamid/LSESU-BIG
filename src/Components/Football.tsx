import React from "react";
import { Member } from "./Member";
import { MemberType } from "@/Types";

const Football = ({
  members,
  pattern,
}: {
  members: MemberType[];
  pattern: number[];
}) => {
  return (
    <div className="flex-col justify-center flex-wrap gap-10">
      {members.length > 0 && (
        <>
          {pattern
            .reduce((acc: number[], curr: number, idx: number) => {
              if (idx == pattern.length - 1) {
                acc.push((acc[idx - 1] || 0) + curr + 1);
                return acc;
              }
              acc.push((acc[idx - 1] || 0) + curr);
              return acc;
            }, [])
            .map((number, idx, arr) => (
              <div className="flex flex-col break:flex-row md:gap-20 lg:gap-28 xl:gap-32 justify-center">
                {members
                  .slice(arr[idx - 1] | 0, arr[idx])
                  .map((member, idx) => (
                    <Member
                      key={idx}
                      imageLink={member.imageLink}
                      name={member.name}
                      role={member.role}
                      linkedin={member.linkedin}
                    />
                  ))}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Football;
