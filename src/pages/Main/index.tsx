import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

const Main: React.FC = () => {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event: PanGestureHandlerStateChangeEvent) {}

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card
            style={{
              transform: [
                {
                  translateY,
                },
              ],
            }}
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 300.611,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 20,00 recebida de Diego Fernandes hoje às
                06:00h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs />
    </Container>
  );
};
export default Main;
