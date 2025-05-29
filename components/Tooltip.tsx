import { Tooltip as ChakraTooltip } from "@chakra-ui/react";
import * as React from "react";

type TooltipProps = ChakraTooltip.RootProps & {
  content: React.ReactNode;
};

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(
  props,
  ref
) {
  const { children, content, ...rest } = props;

  return (
    <ChakraTooltip.Root
      openDelay={100}
      interactive
      positioning={{ placement: "top" }}
      {...rest}
    >
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
      <ChakraTooltip.Positioner>
        <ChakraTooltip.Content ref={ref}>
          <ChakraTooltip.Arrow>
            <ChakraTooltip.ArrowTip />
          </ChakraTooltip.Arrow>
          {content}
        </ChakraTooltip.Content>
      </ChakraTooltip.Positioner>
    </ChakraTooltip.Root>
  );
});

export default Tooltip;
