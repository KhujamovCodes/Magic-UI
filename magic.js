import figlet from 'figlet'
import chalk from 'chalk'

figlet.text('Magic UI', { font: 'Standard' }, (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log(chalk.yellowBright(data));
    console.log("🔰🔰🔰 Welcome Magic UI Clone Version! 🔰🔰🔰");
});
