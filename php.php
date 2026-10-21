<?php
// KHOUABDOU - local_server
$title = "Abdessabour X KHOUYANI";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>git&github - <?php echo $title; ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
     <header>
        <h1><?php echo $title; ?></h1>
        <p>entrenement sur git push , git pull ..... - <?php echo date("d/m/Y"); ?></p>
    </header>

    <main>
        <section>
            <h3>sections <i>paragraphe</i></h3>
            <p>
                <?php
                // PHP kaygeneri para1 l para7 automatique
                for ($i = 1; $i <= 7; $i++) {
                    echo "<span>para$i</span> ";
                }
                ?>
            </p>
        </section>

        <section>
            <p>
                <?php
                for ($i = 8; $i <= 14; $i++) {
                    echo "<span>para$i</span> ";
                }
                ?>
            </p>
        </section>
    </main>
    
    <footer>
        <h3>CopyRight © <?php echo date("Y"); ?> - KHOUABDOU</h3>
        <h5>facebook 💙</h5>
        <h5>whatsapp💚</h5>
        <h5>twitter🐥</h5>
    </footer>
</body>
</html>