import { color, hsla, styled } from '@tidy-ui/commons';
import { IModalProps } from './types';

/**
 * Internal Modal root component
 *
 * @internal
 */
const ModalRoot = styled.div<IModalProps>`
  z-index: ${Number.MAX_SAFE_INTEGER};
  position: fixed;
  background-color: ${hsla(color.slate[900], 0.7)};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

/**
 * Internal ModalContent component
 *
 * @internal
 */
const ModalContent = styled.div<IModalProps>``;

export { ModalContent, ModalRoot };
