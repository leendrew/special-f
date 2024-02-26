import { onMounted, onUnmounted } from 'vue';
import { usePreferredDark } from '@vueuse/core';
import * as colors from 'tailwindcss/colors';
import { cssVar } from '@/constants';

type UserRootColorProps = {
  text: string;
  bg: string;
};

const defaultColors = {
  light: {
    text: colors.neutral[800],
    bg: colors.neutral[200],
  },
  dark: {
    text: colors.neutral[200],
    bg: colors.neutral[800],
  },
};

export function useRootColor(props?: UserRootColorProps) {
  const rootElement = document.documentElement;
  const isDark = usePreferredDark();

  const change = ({ text, bg }: UserRootColorProps) => {
    rootElement.style.setProperty(cssVar.textColor, text);
    rootElement.style.setProperty(cssVar.bgColor, bg);
  };

  const reset = () => {
    if (isDark.value) {
      change({ text: defaultColors.dark.text, bg: defaultColors.dark.bg });
      return;
    }

    change({ text: defaultColors.light.text, bg: defaultColors.light.bg });
  };

  onMounted(() => {
    if (!props) {
      if (isDark.value) {
        change({ text: defaultColors.dark.text, bg: defaultColors.dark.bg });
        return;
      }

      change({ text: defaultColors.light.text, bg: defaultColors.light.bg });
      return;
    }

    change({ ...props });
  });

  onUnmounted(() => {
    reset();
  });
}
