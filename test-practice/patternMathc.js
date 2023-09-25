import ignore from "ignore";

const patterns = [
  "**/node_modules/**/*.js",
];

export default function checkIsPatternMatchFileName(fileName) {
  console.log("fileName", fileName);
  const res = ignore({ allowRelativePaths: true })
    .add(patterns)
    .ignores(fileName);
  console.log("res", res);
  return res;
}
