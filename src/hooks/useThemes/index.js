import { useSelector } from 'react-redux';

export default function useTheme() {
  const { themes } = useSelector((state) => ({
    themes: state.Global.themes,
  }));
  return {
    themes,
  };
}
