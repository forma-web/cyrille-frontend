import { type InjectionKey, inject, provide } from 'vue';

export const createContext = <ContextValue>(
  providerComponentName: string | string[],
  contextName?: string,
) => {
  const symbolDescription =
    typeof providerComponentName === 'string' && !contextName
      ? `${providerComponentName}Context`
      : contextName;

  const injectionKey: InjectionKey<ContextValue | null> =
    Symbol(symbolDescription);

  const injectContext = <
    T extends ContextValue | null | undefined = ContextValue,
  >(
    fallback?: T,
  ): T extends null ? ContextValue | null : ContextValue => {
    const context = inject(injectionKey, fallback);
    if (context) return context;

    if (context === null) return context as any;

    throw new Error(
      `Injection \`${injectionKey.toString()}\` not found. Component must be used within ${
        Array.isArray(providerComponentName)
          ? `one of the following components: ${providerComponentName.join(
              ', ',
            )}`
          : `\`${providerComponentName}\``
      }`,
    );
  };

  const provideContext = (contextValue: ContextValue) => {
    provide(injectionKey, contextValue);
    return contextValue;
  };

  return [injectContext, provideContext] as const;
};
