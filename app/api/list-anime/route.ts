import { listAnimeAction } from '@/@core/actions/sample/list-anime.actions';
import { NextResponse } from 'next/server';


export async function GET(req:any) {
  try {
    const data = await listAnimeAction(req);
    return NextResponse.json(data);
  } catch(error:any) {
    return NextResponse.json({ error: error }, { statusText: error?.message, status: 500 })
  }
};