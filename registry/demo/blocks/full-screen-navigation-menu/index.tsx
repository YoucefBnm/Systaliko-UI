import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/registry/blocks/full-screen-navigation-menu';
import { DropletOffIcon, ActivityIcon, TrendingUpIcon } from 'lucide-react';
import Image from 'next/image';

export function FullScreenNavigationMenuDemo() {
  return (
    <div className="w-full h-[150vh]">
      <NavigationMenu className="border-y h-16 flex justify-center items-center w-full">
        <NavigationMenuList>
          <NavigationMenuItem value="getting-started">
            <NavigationMenuTrigger>Men</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-wrap gap-16 p-8 md:p-12">
              <div className="space-y-5">
                <h3 className="font-medium text-sm">Shop by sport</h3>

                <ul>
                  <ListItem href="/shop/men/sports/basketball">
                    Basketball
                  </ListItem>
                  <ListItem href="/shop/men/sports/footbal">Football</ListItem>
                  <ListItem href="/shop/men/sports/golf">Golf</ListItem>
                  <ListItem href="/shop/men/sports/running">Running</ListItem>
                  <ListItem href="/shop/men/sports/tenis">Tenis</ListItem>
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="font-medium text-sm">Shop by collection</h3>

                <ul>
                  <ListItem href="/shop/men/collections/featured">
                    Featured
                  </ListItem>
                  <ListItem href="/shop/men/collections/new">
                    New arrivals
                  </ListItem>
                  <ListItem href="/shop/men/collections/favorites">
                    Best sellers
                  </ListItem>
                  <ListItem href="/shop/men/collections/sale">
                    Basketball
                  </ListItem>
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="font-medium text-sm">Shop by feature</h3>

                <ul>
                  <ListItem href="/shop/men/features/multicolor">
                    <div className="p-1.5 flex justify-between items-center rounded bg-primary text-primary-foreground">
                      <ActivityIcon className="size-3.5 text-primary-foreground" />
                    </div>
                    Optimal Fit
                  </ListItem>
                  <ListItem href="/shop/men/features/multicolor">
                    <div className="p-1.5 flex justify-between items-center rounded bg-primary text-primary-foreground">
                      <TrendingUpIcon className="size-3.5 text-primary-foreground" />
                    </div>
                    Performance Enhancing
                  </ListItem>
                  <ListItem href="/shop/men/features/multicolor">
                    <div className="p-1.5 flex justify-between items-center rounded bg-primary text-primary-foreground">
                      <DropletOffIcon className="size-3.5 text-primary-foreground" />
                    </div>
                    Moisture Management
                  </ListItem>
                </ul>
              </div>

              <div>
                <Image
                  width={413}
                  height={603}
                  alt="shop sale"
                  src="https://images.unsplash.com/photo-1598467985932-a2540eaeb7d1?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="max-w-[200px] max-h-full"
                />
                <NavigationMenuLink
                  href="/shop/men/collections/sale"
                  className="text-destructive flex-row items-center"
                >
                  Shop sale
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Women</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-wrap gap-16 p-8 md:p-12">
              <div className="space-y-5">
                <h3 className="font-medium text-sm">Shop by brand</h3>

                <ul>
                  <ListItem href="/shop/woman/brands/adidas">Adidas</ListItem>
                  <ListItem href="/shop/women/brands/brooks">Brooks</ListItem>
                  <ListItem href="/shop/women/brands/under-armour">
                    Under Armour
                  </ListItem>
                  <ListItem href="/shop/women/brands/nike">Nike</ListItem>
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="font-medium text-sm">Shop by collection</h3>

                <ul>
                  <ListItem href="/shop/women/collections/featured">
                    Featured
                  </ListItem>
                  <ListItem href="/shop/women/collections/new">
                    New arrivals
                  </ListItem>
                  <ListItem href="/shop/women/collections/favorites">
                    Best sellers
                  </ListItem>
                  <ListItem href="/shop/women/collections/sale">
                    Basketball
                  </ListItem>
                </ul>
              </div>

              <div>
                <Image
                  width={615}
                  height={603}
                  alt="shop sale"
                  src="https://images.unsplash.com/photo-1563903260263-065d1c592e6b?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="max-w-[200px] max-h-full"
                />
                <NavigationMenuLink
                  href="/shop/women/collections/sale"
                  className="text-destructive flex-row items-center"
                >
                  Shop sale
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/shop/"
              className={`${navigationMenuTriggerStyle()} text-destructive`}
            >
              Sale
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        className="inline-flex flex-row gap-2 items-center"
        href={href}
      >
        {children}
      </NavigationMenuLink>
    </li>
  );
}
