import React from "react";

export function getDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export const useGetDocumentHeight = () => {
  var documentHeight = Math.max(
    window.document.body.scrollHeight,
    window.document.body.offsetHeight,
  );
  return documentHeight;
};

export const useGetWindowHeight = () => {
  return window.innerHeight;
};

export const constructUrl = (baseUrl, path) =>
  !baseUrl || !path ? null : `${baseUrl}${path}`;

export const validateEmail = (email) => {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return regex.test(email);
};
