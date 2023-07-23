import {makeScene2D} from '@motion-canvas/2d';
import {all, createRef, delay} from '@motion-canvas/core';
import {CodeBlock} from '@motion-canvas/2d/lib/components/CodeBlock';

export default makeScene2D(function* (view) {
  const block = createRef<CodeBlock>();

  view.add(
      <CodeBlock
          ref={block}
          language="js"
          code={`console.log("Hell, world!")`}
      />,
  );

  yield * delay(1, () => {});
});