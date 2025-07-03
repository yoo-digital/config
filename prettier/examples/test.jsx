import a from 'some-lib';
import Another from '../another/another';
import Test from './test/test';
import './test.scss';

const Compo = () => {
  a();

  return (
    <>
      <Test />
      <Another />
      <div
        other="other"
        value="value"
        type="type"
        title="title"
        src="src"
        role="role"
        name="name"
        id="id"
        href="href"
        for="for"
        data-test="test"
        class="class"
        aria-test="test"
        alt="alt"
      >
        <h1>Test</h1>
      </div>
    </>
  );
};
