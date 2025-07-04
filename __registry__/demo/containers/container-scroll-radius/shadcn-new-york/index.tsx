import {
  ContainerScrollAnimation,
  ContainerScrollInset,
  ContainerScrollTranslate,
} from '@/__registry__/containers/containers-scroll-animations/shadcn-new-york';

export function ContainerScrollRadiusDemo() {
  return (
    <ContainerScrollAnimation>
      <ContainerScrollTranslate className="h-dvh  py-8 px-6 flex justify-center items-center">
        <ContainerScrollInset
          className="overflow-hidden size-96"
          insetRangeY={[0, 0]}
          insetXRange={[0, 0]}
          roundednessRange={[1000, 16]}
        >
          <img
            src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="tokyo"
            className="size-full object-cover"
          />
        </ContainerScrollInset>
      </ContainerScrollTranslate>
    </ContainerScrollAnimation>
  );
}
