import ignore from "ignore";

const patterns = [
  "**/node_modules/**/*.js",
];

export default function checkIsPatternMatchFileName(fileName) {
  const res = ignore({ allowRelativePaths: true })
    .add(patterns)
    .ignores(fileName);
  return res;
}
