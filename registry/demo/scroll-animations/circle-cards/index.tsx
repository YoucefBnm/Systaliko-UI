import {
  CircleCard,
  CircleCards,
  CircleCardsWrapper,
  CircleItem,
} from '@/registry/scroll-animations/circle-cards';

export function CircleCardsDemo() {
  return (
    <div className="w-full">
      <CircleCards spacerClassName="w-full h-[500px]">
        <CircleCardsWrapper yOutput={[0, 500]}>
          <CircleItem outputRange={[30, -5]} inputRange={[0, 0.4]}>
            <CircleCard>
              <img
                src="https://pkmncards.com/wp-content/uploads/sv6-5_en_066_std.jpg"
                width={431}
                height={603}
                className="object-contain max-h-full h-auto w-3xs rounded-xl"
                alt="pokemon card"
              />
            </CircleCard>
          </CircleItem>

          <CircleItem outputRange={[30, -4]} inputRange={[0.2, 0.6]}>
            <CircleCard>
              <img
                src="https://pkmncards.com/wp-content/uploads/rsv10-5_en_040_std.jpg"
                width={431}
                height={603}
                className="object-contain max-h-full h-auto w-3xs rounded-xl"
                alt="pokemon card"
              />
            </CircleCard>
          </CircleItem>

          <CircleItem outputRange={[30, -3]} inputRange={[0.4, 0.8]}>
            <CircleCard>
              <img
                src="https://pkmncards.com/wp-content/uploads/sv3-5_en_135_std.jpg"
                width={431}
                height={603}
                className="object-contain max-h-full h-auto w-3xs rounded-xl"
                alt="pokemon card"
              />
            </CircleCard>
          </CircleItem>

          <CircleItem outputRange={[30, -2]} inputRange={[0.6, 1]}>
            <CircleCard>
              <img
                src="https://pkmncards.com/wp-content/uploads/en_US-SWSH2-038-galarian_mr_rime.jpg"
                width={431}
                height={603}
                className="object-contain max-h-full h-auto w-3xs rounded-xl"
                alt="pokemon card"
              />
            </CircleCard>
          </CircleItem>
        </CircleCardsWrapper>
      </CircleCards>
    </div>
  );
}
