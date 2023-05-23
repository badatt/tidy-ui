import React from 'react';
import { CodeRoot, Content, CopyIcon, CopySuccessIcon, ToolTip } from './components';
import { ICodeProps } from './types';

/**
 * Code component can be used to represented pre-formatted text.
 * A good replacement for html <pre> tag. A click to copy
 * button is added at the top right corner of the component.
 */
const Code = React.forwardRef<HTMLDivElement, ICodeProps>((props, ref) => {
  const { children, canCopy, ...rest } = props;
  const codeRef = React.useRef<HTMLPreElement>(null);
  const [copied, setCopied] = React.useState(false);

  /** @internal */
  const handleCopy = () => {
    navigator.permissions
      .query({ name: 'clipboard-write' as PermissionName })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.clipboard
            .writeText(codeRef.current?.innerText ?? '')
            .then(() => {
              setCopied(true);
            })
            .catch((e) => {
              setCopied(false);
              console.error('Error while writing to clipboard', e);
            });
        } else {
          console.error("'clipboard-write' permission was not granted");
        }
      })
      .catch(() => {
        setCopied(false);
        console.error("Error fetching 'clipboard-write' permissions");
      });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CodeRoot ref={ref} role="contentinfo" {...rest}>
      <Content ref={codeRef}>{children}</Content>
      {canCopy && (
        <>
          <ToolTip visible={copied} role="tooltip" data-testid="copy-success-tooltip">
            Copied
          </ToolTip>
          {copied ? (
            <CopySuccessIcon onClick={handleCopy} role="status" data-testid="copy-success" />
          ) : (
            <CopyIcon onClick={handleCopy} role="button" data-testid="copy-code-btn" />
          )}
        </>
      )}
    </CodeRoot>
  );
});

Code.defaultProps = {
  canCopy: true,
};

Code.propTypes = {
  /** @internal */
  children: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string') {
      return new Error(`Only text node is allowed under '${componentName}'`);
    }
    return null;
  },
};

Code.displayName = 'Code';

export { Code };
