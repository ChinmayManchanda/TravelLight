import * as React from 'react'
import {Button} from 'react-native'
import { Portal, Dialog, Paragraph } from 'react-native-paper';

export default function ConfirmationPopUp(props: any) {
    const {message, goBackAction, visible} = props;
    return(
    <Portal>
        <Dialog visible={visible} onDismiss={() => goBackAction()}>
            <Dialog.Content>
                <Paragraph>{message}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
                <Button title="Okay" onPress={() => goBackAction()}/>
            </Dialog.Actions>
        </Dialog>
    </Portal>
    );
}