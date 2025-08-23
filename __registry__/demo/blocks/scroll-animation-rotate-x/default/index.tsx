import {
  ScrollAnimationRotate,
  ScrollAnimationRotateContainer,
} from '@/__registry__/blocks/scroll-animation-rotate/default';

export const ScrollAnimationRotateXDemo = () => {
  return (
    <ScrollAnimationRotate>
      <ScrollAnimationRotateContainer
        rotationDirection="y"
        rotateRange={[-85, 0]}
        className="h-96 w-3/6 mx-auto rounded-xl"
      >
        <img
          width={1015}
          height={678}
          src="https://images.unsplash.com/photo-1655853548169-646b6e0f15ca?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="nike air jordan"
          className="size-full object-cover"
        />
      </ScrollAnimationRotateContainer>
    </ScrollAnimationRotate>
  );
};
