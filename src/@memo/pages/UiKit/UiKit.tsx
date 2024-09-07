import {Indicator} from '@memo/ui-kit/components/Indicator/Indicator';
import {StartButton} from '@memo/ui-kit/components/StartButton/StartButton';
import {SwitchButton} from '@memo/ui-kit/components/SwitchButton/SwitchButton';

import {Buttons} from './components/Buttons/Buttons';
import {Cards} from './components/CardItems/Cards';
import {ModalContainers} from './components/ModalContainers/ModalContainers';
import {Section} from './components/Section/Section';

export const UiKit = () => {
  return (
    <>
      <Section title="Card Item Example">
        <Cards />
      </Section>
      <Section title="Buttons Example">
        <Buttons />
      </Section>
      <Section title="SwitchButton Example">
        <SwitchButton />
      </Section>
      <Section title="Modal Container Example">
        <ModalContainers />
      </Section>
      <Section title="Start Button Example">
        <StartButton />
      </Section>
      <Section title="Indicator Example">
        <Indicator
          title="Time:"
          value="00:00"
        />
      </Section>
    </>
  );
};
