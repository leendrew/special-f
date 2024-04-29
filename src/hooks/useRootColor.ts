import { onMounted, onUnmounted } from 'vue';
import { usePreferredDark } from '@vueuse/core';
import { CSS_VAR } from '@/constants';

type UserRootColorProps = {
  text: string;
  bg: string;
};

const COLOR_DEFAULT = {
  light: {
    text: '#262626',
    bg: '#e5e5e5',
  },
  dark: {
    text: '#e5e5e5',
    bg: '#262626',
  },
};

export function useRootColor(props?: UserRootColorProps) {
  const rootElement = document.documentElement;
  const isDark = usePreferredDark();

  const change = ({ text, bg }: UserRootColorProps) => {
    rootElement.style.setProperty(CSS_VAR.textColor, text);
    rootElement.style.setProperty(CSS_VAR.bgColor, bg);
  };

  const reset = () => {
    if (isDark.value) {
      change({ text: COLOR_DEFAULT.dark.text, bg: COLOR_DEFAULT.dark.bg });
      return;
    }

    change({ text: COLOR_DEFAULT.light.text, bg: COLOR_DEFAULT.light.bg });
  };

  onMounted(() => {
    if (!props) {
      if (isDark.value) {
        change({ text: COLOR_DEFAULT.dark.text, bg: COLOR_DEFAULT.dark.bg });
        return;
      }

      change({ text: COLOR_DEFAULT.light.text, bg: COLOR_DEFAULT.light.bg });
      return;
    }

    change({ ...props });
  });

  onUnmounted(() => {
    reset();
  });
}
