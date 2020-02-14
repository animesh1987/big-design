import React, { memo } from 'react';

import { MarginProps } from '../../mixins';

import { StyledBadge } from './styled';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, MarginProps {
  label: string;
  variant?: 'danger' | 'secondary' | 'success' | 'warning';
}

export const Badge: React.FC<BadgeProps> = memo(({ className, style, label, ...props }) => (
  <StyledBadge {...props}>{label}</StyledBadge>
));

Badge.displayName = 'Badge';
