# Generated by Django 3.0.5 on 2020-04-28 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('records', '0002_auto_20200423_0129'),
    ]

    operations = [
        migrations.AddField(
            model_name='trustedpeople',
            name='image_file',
            field=models.ImageField(null=True, upload_to=''),
        ),
        migrations.DeleteModel(
            name='Image',
        ),
    ]
