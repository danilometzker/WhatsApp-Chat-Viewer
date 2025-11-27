import * as stylex from '@stylexjs/stylex';

const ChatMenu = () => {
  return <div {...stylex.props(styles.base)}></div>;
};

export default ChatMenu;

const styles = stylex.create({
  base: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
  },
});
