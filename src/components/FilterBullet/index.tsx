import React from 'react';

import { Container, Title } from './styles';

interface BulletProps {
    bulletTitle: string;
    onPress: () => void;
    active: boolean;
}

function FilterBullet({ bulletTitle }: BulletProps) {
    return (
        <Container>
            <Title>{bulletTitle}</Title>
        </Container>
    );
}

export default FilterBullet;
