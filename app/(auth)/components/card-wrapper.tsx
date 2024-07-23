// @flow 
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import * as React from 'react';
import { Header } from './header';
import { Social } from './social';
import { BackButton } from './back-button';


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    headerTitle: string;
    showSocial?: boolean;
}
export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    headerTitle,
    showSocial
}: CardWrapperProps) => {
    return (
      <Card className='w-[400px] shadow-md'>
        <CardHeader>
          <Header 
            label ={headerLabel}
            title={headerTitle}
          />
        </CardHeader>
        <CardContent>
          {children}
          {showSocial && (
            <div className="mt-2">
              <Social/>
            </div>
          )}
          <CardFooter>
            <BackButton 
              href={backButtonHref}
              label={backButtonLabel}
            />
          </CardFooter>
        </CardContent>
      </Card>
    );
};