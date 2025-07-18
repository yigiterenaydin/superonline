import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const { command } = await request.json();

    // Güvenlik kontrolü - sadece localhost'tan gelen istekleri kabul et
    const host = request.headers.get('host');
    if (!host || !host.includes('localhost')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    let systemCommand = '';

    switch (command) {
      case 'sleep':
        // Windows için uyku modu
        systemCommand = 'powercfg /hibernate off && rundll32.exe powrprof.dll,SetSuspendState 0,1,0';
        break;
      case 'restart':
        // Windows için yeniden başlat
        systemCommand = 'shutdown /r /t 0';
        break;
      case 'shutdown':
        // Windows için kapat
        systemCommand = 'shutdown /s /t 0';
        break;
      case 'lock':
        // Windows için ekran kilitleme
        systemCommand = 'rundll32.exe user32.dll,LockWorkStation';
        break;
      default:
        return NextResponse.json({ error: 'Invalid command' }, { status: 400 });
    }

    // Komutu çalıştır
    const { stdout, stderr } = await execAsync(systemCommand);
    
    if (stderr) {
      console.error('System command error:', stderr);
      return NextResponse.json({ error: 'Command execution failed' }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: `${command} komutu başarıyla çalıştırıldı`,
      output: stdout 
    });

  } catch (error) {
    console.error('System control API error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      message: 'Komut çalıştırılırken hata oluştu'
    }, { status: 500 });
  }
} 