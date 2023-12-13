import { stringToHTML } from "@/utils/stringToHTML";
import { readintTimeCalculator } from "@/utils/utils-tsx";
import React from "react";

export default function ResourceContent({
  content,
  author,
  avatar,
}: {
  content: string;
  author: string;
  avatar: string;
}) {
  return (
    <div className="grid grid-cols-1 px-sm text-base text-resourcesPurple tablet:grid-cols-2 tablet:px-md">
      <div className="hidden font-light tablet:block">
        <b className="font-semibold">Read Time</b>{" "}
        {readintTimeCalculator(content)} min
      </div>
      <div>
        <div className="bottom-info mb-[36px] flex items-center gap-2 border-b border-resourcesPurple pb-[30px] tablet:gap-5 tablet:pb-[36px]">
          <img src={avatar} alt="Author" className="h-12 w-12 rounded-full" />
          <div
            className="flex w-full justify-between
          "
          >
            <div className="flex gap-2">
              <b>Author</b>
              {author}
            </div>
            <p className="block tablet:hidden">
              <b>Read Time</b> {readintTimeCalculator(content)} min
            </p>
          </div>
        </div>
        <div className="space-y-2">{stringToHTML(content)}</div>
      </div>
    </div>
  );
}
