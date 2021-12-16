import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.url !== '/teams') {
        return NextResponse.redirect('/teams');
    }
}