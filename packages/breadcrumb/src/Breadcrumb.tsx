import React from 'react';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbRoot, BreadcrumbSeparator } from './components';
import { IBreadcrumbProps } from './types';

/** @internal */
interface BreadcrumbComponent
  extends React.ForwardRefExoticComponent<IBreadcrumbProps & React.RefAttributes<HTMLOListElement>> {
  /** @internal */
  Item: typeof BreadcrumbItem;
}

/**
 * Breadcrumb can be used to represent navigation in your application, can be
 * limited to desired number of items, powered by theming
 */
const Breadcrumb = React.forwardRef<HTMLOListElement, IBreadcrumbProps>((props, ref) => {
  const { children, limit, separator, onExpand, isLastItemNotActive, ...rest } = props;
  const childrenArray = React.Children.toArray(children);
  const [expanded, setExpanded] = React.useState(childrenArray.length > limit! ? false : true);

  const renderSeparator = React.useCallback(() => {
    if (['string', 'number'].includes(typeof separator)) {
      return <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>;
    }
    return separator;
  }, [separator]);

  const renderChildren = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (items: any) => {
      return React.Children.map(items, (c, i) => {
        const ele = c as React.ReactElement;
        let childElement;
        if (i == items.length - 1) {
          childElement = React.cloneElement(ele, {
            ...ele.props,
            isActive: !isLastItemNotActive,
          });
        } else {
          childElement = React.cloneElement(ele, {
            ...ele.props,
            tone: rest.tone || ele.props.tone,
          });
        }
        return [childElement, i < items.length - 1 ? renderSeparator() : null];
      });
    },
    [children, limit, separator],
  );

  const handleExpand = React.useCallback(
    (event: React.MouseEvent) => {
      setExpanded(true);
      onExpand?.(event);
    },
    [onExpand],
  );

  return (
    <BreadcrumbRoot ref={ref} role="navigation" {...rest}>
      {expanded
        ? renderChildren(childrenArray)
        : renderChildren([
            childrenArray[0],
            <BreadcrumbItem key={1} onClick={handleExpand}>
              ...
            </BreadcrumbItem>,
            childrenArray[childrenArray.length - 1],
          ])}
    </BreadcrumbRoot>
  );
}) as BreadcrumbComponent;

Breadcrumb.defaultProps = {
  isLastItemNotActive: false,
  separator: '/',
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.Item = BreadcrumbItem;

export { Breadcrumb };
