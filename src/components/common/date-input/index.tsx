import { AntDesign } from '@expo/vector-icons';
import dayjs from 'dayjs';

import Typography from '@/components/common/typography';
import { shadow } from '@/styles/shadow';

import * as S from './style';

type Props = {
  date: Date;
  onPress: () => void;
};

function DateInput({ onPress, date }: Props) {
  return (
    <S.Container
      style={shadow[2]}
      onPress={onPress}>
      <AntDesign
        name='calendar'
        size={24}
        color='#979797'
      />
      <Typography>{dayjs(date).format('YYYY-MM-DD')}</Typography>
    </S.Container>
  );
}

export default DateInput;