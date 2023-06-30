import React from 'react';
import { CodeRoot, Content, CopyError, CopyIcon, CopySuccessIcon, ToolTip } from './components';
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
  const [copyError, setCopyError] = React.useState<string>();

  React.useEffect(() => {
    return () => {
      setCopied(false);
      setCopyError(undefined);
    };
  }, []);

  const handleCopy = React.useCallback(() => {
    navigator.permissions
      .query({ name: 'clipboard-write' as PermissionName })
      .then((result) => {
        if (result.state === 'granted') {
          navigator.clipboard
            .writeText(`${codeRef.current?.innerText}`)
            .then(() => {
              setCopied(true);
            })
            .catch((e) => {
              setCopied(false);
              setCopyError(e);
            });
        } else {
          setCopyError("Please grant 'clipboard-write' permission for this site on your browser");
        }
      })
      .catch((e) => {
        setCopied(false);
        setCopyError(e);
      });

    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setCopyError(undefined), 5000);
  }, [codeRef]);

  return (
    <CodeRoot ref={ref} role="contentinfo" {...rest}>
      <Content ref={codeRef}>{children}</Content>
      {canCopy && (
        <>
          <ToolTip visible={copied} role="tooltip">
            Copied
          </ToolTip>
          {copied ? (
            <CopySuccessIcon onClick={handleCopy} role="status" />
          ) : (
            <CopyIcon onClick={handleCopy} role="button" />
          )}
        </>
      )}
      {copyError && <CopyError>{`${copyError}`}</CopyError>}
    </CodeRoot>
  );
});

Code.defaultProps = {
  canCopy: true,
};

Code.displayName = 'Code';

export { Code };
