import React from 'react';
import { Resizer, ThRoot } from './components';
import { IThProps } from './types';

/**
 * th element
 *
 * @param {IThProps} props th props
 * @returns {JSX.Element} th element
 */
const Th = (props: IThProps): JSX.Element => {
  const { children, ele, ...rest } = props;
  const thRef = React.useRef();
  const resizerRef = React.useRef(null);

  /** @internal */
  const createResizableColumn = (col, resizer) => {
    // Track the current position of mouse
    let x = 0;
    let w = 0;

    /** @internal */
    const mouseDownHandler = function (e) {
      // Get the current mouse position
      x = e.clientX;

      // Calculate the current width of column
      const styles = window.getComputedStyle(col);
      w = parseInt(styles.width, 10);

      // Attach listeners for document's events
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
      resizer.classList.add('resizing');
    };

    /** @internal */
    const mouseMoveHandler = function (e) {
      // Determine how far the mouse has been moved
      const dx = e.clientX - x;

      // Update the width of column
      col.style.minWidth = `${w + dx}px`;
    };

    /** @internal */
    // When user releases the mouse, remove the existing event listeners
    const mouseUpHandler = function () {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      resizer.classList.remove('resizing');
    };

    resizer.addEventListener('mousedown', mouseDownHandler);
  };

  React.useEffect(() => {
    createResizableColumn(thRef.current, resizerRef.current);
  }, []);

  return (
    <ThRoot ref={thRef} data-tui-name="Th" {...rest}>
      {ele ? React.cloneElement(ele, {}, children) : children}
      <Resizer data-tui-name="Resizer" ref={resizerRef} />
    </ThRoot>
  );
};

Th.defaultProps = {
  align: 'left',
};

Th.displayName = 'Th';

export { Th };
