import { Button, Flex, FlexItem } from '@bigcommerce/big-design';
import { MenuIcon } from '@bigcommerce/big-design-icons';
import { default as Router } from 'next/router';
import React, { useState } from 'react';

import { StyledMenu, StyledNavigation } from './styled';

export const SideNavMenu: React.FC = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => setIsExpanded(!isExpanded);
  Router.events.on('routeChangeComplete', () => setIsExpanded(false));

  return (
    <FlexItem style={{ display: 'flex', alignItems: 'center' }}>
      <Flex>
        <StyledMenu>
          <Button variant="subtle" onClick={handleClick} iconOnly={<MenuIcon color="secondary70" />} />
        </StyledMenu>
        <StyledNavigation isExpanded={isExpanded} borderBottom="box" borderTop="box" shadow="floating">
          {props.children}
        </StyledNavigation>
      </Flex>
    </FlexItem>
  );
};
