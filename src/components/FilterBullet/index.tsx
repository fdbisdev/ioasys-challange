import React from 'react';

import { Container, Title } from './styles';

export interface BulletProps {
    bulletTitle: string;
    onPress: () => void;
    active: boolean;
}

function FilterBullet({ bulletTitle, active = false, onPress }: BulletProps) {
    return (
        <Container onPress={onPress} active={active}>
            <Title active={active}>{bulletTitle}</Title>
        </Container>
    );
}

export default FilterBullet;
