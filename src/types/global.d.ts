// /src/types/global.d.ts
declare module '*.module.css' {
  const classes: { [className: string]: string };
  export default classes;
}
declare module '*.css';
declare module '*.svg' {
  const content: string;
  export default content;
}
