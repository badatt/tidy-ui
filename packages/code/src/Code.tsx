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

  const handleCopy = React.useCallback(() => {
    navigator.permissions
      .query({ name: 'clipboard-write' as PermissionName })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.clipboard
            .writeText(codeRef.current?.innerText ?? '')
            .then(() => {
              console.log('Setting copied to true');
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
  }, [codeRef]);

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
            <CopyIcon onClick={handleCopy} role="button" />
          )}
        </>
      )}
    </CodeRoot>
  );
});

Code.defaultProps = {
  canCopy: true,
};

Code.displayName = 'Code';

export { Code };
