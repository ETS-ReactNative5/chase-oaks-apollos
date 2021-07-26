import React from 'react';
import { View } from 'react-native';
<<<<<<< ours
import { useNavigation } from '@react-navigation/native';
=======
>>>>>>> theirs

import {
  TableView,
  Cell,
  CellIcon,
  CellText,
  Divider,
  Touchable,
  styled,
  PaddedView,
  H4,
} from '@apollosproject/ui-kit';
import { RockAuthedWebBrowser } from '@apollosproject/ui-connected';

const RowHeader = styled(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: theme.sizing.baseUnit,
}))(PaddedView);

const Name = styled({
  flexGrow: 1,
})(View);

<<<<<<< ours
const ActionTable = () => {
  const navigation = useNavigation();
  return (
    <RockAuthedWebBrowser>
      {(openUrl) => (
        <View>
          <RowHeader>
            <Name>
              <H4>{'Contact'}</H4>
            </Name>
          </RowHeader>
          <TableView>
            <Touchable
              onPress={() =>
                openUrl('https://www.chaseoaks.org/contact-chase-oaks')
              }
            >
              <Cell>
                <CellText>Contact us</CellText>
                <CellIcon name="arrow-next" />
              </Cell>
            </Touchable>
            <Divider />
            <Touchable
              onPress={() =>
                openUrl('https://www.chaseoaks.org/contact-chase-oaks')
              }
            >
              <Cell>
                <CellText>I need prayer</CellText>
                <CellIcon name="arrow-next" />
              </Cell>
            </Touchable>
            <Divider />
            <Touchable
              onPress={() =>
                openUrl('https://www.chaseoaks.org/contact-chase-oaks')
              }
            >
              <Cell>
                <CellText>Get baptized</CellText>
                <CellIcon name="arrow-next" />
              </Cell>
            </Touchable>
            <Divider />
            <Touchable
              onPress={() =>
                openUrl('https://www.chaseoaks.org/contact-chase-oaks')
              }
            >
              <Cell>
                <CellText>Get care</CellText>
                <CellIcon name="arrow-next" />
              </Cell>
            </Touchable>
            <Divider />
            <Touchable
              onPress={() => openUrl('https://www.chaseoaks.org/locations')}
            >
              <Cell>
                <CellText>Our locations</CellText>
                <CellIcon name="arrow-next" />
              </Cell>
            </Touchable>
            <Divider />
            <Touchable
              onPress={() =>
                openUrl('https://www.chaseoaks.org/contact-chase-oaks')
              }
            >
              <Cell>
                <CellText>Report an issue</CellText>
                <CellIcon name="arrow-next" />
              </Cell>
            </Touchable>
          </TableView>
        </View>
      )}
    </RockAuthedWebBrowser>
  );
};
=======
const ActionTable = () => (
  <RockAuthedWebBrowser>
    {(openUrl) => (
      <View>
        <RowHeader>
          <Name>
            <H4>{'Connect with Apollos'}</H4>
          </Name>
        </RowHeader>
        <TableView>
          <Touchable
            onPress={() => openUrl('https://apollosrock.newspring.cc/page/235')}
          >
            <Cell>
              <CellText>Find a serving opportunity</CellText>
              <CellIcon name="arrow-next" />
            </Cell>
          </Touchable>
          <Divider />
          <Touchable
            onPress={() => openUrl('https://apollosrock.newspring.cc/page/236')}
          >
            <Cell>
              <CellText>Join a small group</CellText>
              <CellIcon name="arrow-next" />
            </Cell>
          </Touchable>
          <Divider />
          <Touchable
            onPress={() => openUrl('https://apollosrock.newspring.cc/page/233')}
          >
            <Cell>
              <CellText>I need prayer</CellText>
              <CellIcon name="arrow-next" />
            </Cell>
          </Touchable>
        </TableView>
      </View>
    )}
  </RockAuthedWebBrowser>
);
>>>>>>> theirs

const StyledActionTable = styled(({ theme }) => ({
  paddingBottom: theme.sizing.baseUnit * 100,
}))(ActionTable);

export default StyledActionTable;
