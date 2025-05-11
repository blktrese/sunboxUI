import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtcqikpjonxvarfhzquw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Y3Fpa3Bqb254dmFyZmh6cXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MzU2NzksImV4cCI6MjA2MjUxMTY3OX0.6rL1nTePcPQdYrdCWLh1x8eBCuHyZDwMIcm_f0YWGcs'; // truncated for security

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
