import React from 'react';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbItemWrapper, BreadcrumbRoot, BreadcrumbSeparator } from './components';
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
  const { children, className, limit, separator, onExpand, ...rest } = props;
  const childrenArray = React.Children.toArray(children);
  const [expanded, setExpanded] = React.useState(childrenArray.length > limit! ? false : true);

  const renderSeparator = React.useCallback(() => {
    if (['string', 'number'].includes(typeof separator)) {
      return <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>;
    }
    return separator;
  }, [separator]);

  const renderChildren = React.useCallback(
    (items: Array<Exclude<React.ReactNode, boolean | null | undefined>>) => {
      return React.Children.map(items, (c, i) => {
        const childNode = <BreadcrumbItemWrapper {...rest}>{c}</BreadcrumbItemWrapper>;
        return [childNode, i < items.length - 1 ? renderSeparator() : null];
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
    <BreadcrumbRoot ref={ref} className={className} role="list" {...rest}>
      {expanded
        ? renderChildren(React.Children.toArray(children))
        : renderChildren([
            childrenArray[0],
            <BreadcrumbItem onClick={handleExpand}>...</BreadcrumbItem>,
            childrenArray[childrenArray.length - 1],
          ])}
    </BreadcrumbRoot>
  );
}) as BreadcrumbComponent;

Breadcrumb.defaultProps = {
  separator: '/',
  tone: 'major',
};

Breadcrumb.Item = BreadcrumbItem;

export { Breadcrumb };
